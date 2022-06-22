import {
  ApiInfo, ApiServer, Context, dependency, Get, Hook, HttpResponseNotFound, HttpResponseRedirect, Post, render
} from '@foal/core';
import { Disk, ValidateMultipartFormDataBody } from '@foal/storage';

import { appDataSource } from '../data-source';

import { User } from '../entities';

@ApiInfo({
  title: 'Profile API',
  version: '1.0.0',
})
@ApiServer({
  url: '/profile'
})
export class ProfileController {
  @dependency
  disk: Disk;

  @Post('/image')
  @Hook(async ctx => {
    ctx.user = await appDataSource.getRepository(User).findOneBy({ email: 'john@foalts.org' })
  })
  @ValidateMultipartFormDataBody({
    files: {
      profile: { required: true, saveTo: 'images/profiles' }
    }
  })
  async uploadProfilePicture(ctx: Context<User>) {
    const user = ctx.user;
    if (user.profile) {
      try {
        await this.disk.delete(user.profile);
      } catch (error: any) {
        console.log(error.message);
      }
    }

    user.profile = ctx.request.body.files.profile.path;
    await appDataSource.getRepository(User).save(user);

    return new HttpResponseRedirect('/profile');
  }

  @Get('/image')
  @Hook(async function (this: ProfileController, ctx) {
    ctx.user = await appDataSource.getRepository(User).findOneBy({ email: 'john@foalts.org' })
  })
  async downloadProfilePicture(ctx: Context<User>) {
    const { profile } = ctx.user;

    if (!profile) {
      return new HttpResponseNotFound();
    }

    return this.disk.createHttpResponse(profile);
  }

  @Get()
  profile() {
    return render('./templates/profile.html');
  }
}
