import * as elements from "typed-html"

export default ({ children }: any) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        </head>
        {children}
    </html>
)
