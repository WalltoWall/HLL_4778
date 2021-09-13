/* eslint-disable @typescript-eslint/no-non-null-assertion */
import assert from "tiny-invariant"

export const PRISMIC_REPOSITORY_NAME = process.env.PRISMIC_REPOSITORY_NAME!
assert(PRISMIC_REPOSITORY_NAME)

export const PRISMIC_ACCESS_TOKEN = process.env.PRISMIC_ACCESS_TOKEN!
assert(PRISMIC_ACCESS_TOKEN)
