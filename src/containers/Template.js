const template = ( dom ) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        <body>
            <div id="app">${ dom }</div>
        </body>
            <script src="./app.bundle.js"></script>
        </html>
    `;
}

export default template;