import vermiErrors from './src/errors'

declare namespace vermi {
  export type VersionStrategy = 'major' | 'minor' | 'patch' | 'prerelease'

  export interface VersionOptions {
    strategy: VersionStrategy
    packageDir?: string | null
  }

  export interface MetaPackageJson {
    version: string
  }

  export const errors = vermiErrors

  export function version(options: VersionOptions): Promise<void>;
}

export = vermi
