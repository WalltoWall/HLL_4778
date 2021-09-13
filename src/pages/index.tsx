import { GetStaticPropsContext } from "next"
import PageTemplate, { getStaticProps as getPageStaticProps } from "./[uid]"

export function getStaticProps(ctx: GetStaticPropsContext) {
	return getPageStaticProps({ ...ctx, params: { uid: "home" } })
}

export default PageTemplate
