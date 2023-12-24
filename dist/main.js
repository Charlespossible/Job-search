"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const hbs = require("hbs");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'src/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src/views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'src/views/partials/header'));
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'src/views/partials/footer'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map