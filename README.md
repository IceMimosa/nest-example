## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript Example.

## Running the app

```bash
$ yarn 
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```
浏览器打开 `http://localhost:3000/`

## 配置

> mysql

修改 `ormconfig.json` 相关配置

```sql
-- 测试users的表结构
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

> TODO 其他


## License

  Nest is [MIT licensed](LICENSE).


