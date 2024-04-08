import { Elysia } from 'elysia';
import { html } from '@elysiajs/html'
import * as elements from "typed-html"
import Layout from './layout';
import Body from './body';

const app = new Elysia()
    .use(html())
    .get("/", () => (
        <Layout>
            <Body />
        </Layout>
    ))
    .listen(3000);

