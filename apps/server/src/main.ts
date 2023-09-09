import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const swaggerSetup = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Posts')
    .setDescription('The posts API description')
    .setVersion('1.0')
    .addTag('posts')
    .addBearerAuth(
      {
        type: 'http',
      },
      'default',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const options = {
    // swaggerOptions: {
    //   authAction: {
    //     defaultBearerAuth: {
    //       name: 'defaultBearerAuth',
    //       schema: {
    //         description: 'Default',
    //         type: 'http',
    //         in: 'header',
    //         scheme: 'bearer',
    //         bearerFormat: 'JWT',
    //       },
    //     },
    //   },
    // },
  };

  SwaggerModule.setup(
    'api',
    app,
    document,
  );
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  swaggerSetup(app);
  await app.listen(3000);
}
bootstrap();
