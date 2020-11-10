/*-----------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the MIT License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/

import * as exec from '@actions/exec';
// import * as split from 'argv-split';
// import * as sub from 'substituter';

export class Command {
  static async execute(s2iPath: string, args: string): Promise<number> {
    if (!s2iPath) {
      return Promise.reject(new Error('Unable to find s2i bundle'));
    }

    // const cmdArgs = Command.prepareS2iArgs(args);
    const exitCode = await exec.exec(`${s2iPath} ${args}`);
    return exitCode;
  }

//   static prepareS2iArgs(s2iArgs: string): string {
//     const interpolatedArgs = sub(s2iArgs, process.env);
//     let args: string[] = split(interpolatedArgs);
//     if (args[0] === 's2i' || args[0] === 's2i.exe') {
//       args = args.slice(1);
//     }
//     return args.join(' ');
//   }
}
