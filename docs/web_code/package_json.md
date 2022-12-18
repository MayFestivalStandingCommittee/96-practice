# devDependenciesとdependenciesの違い

- devDependencies

開発時にインストールするパッケージ達。

- dependencies

本番用のパッケージ達。

devdependenciesとdependenciesの両方のパッケージをインストールするときは、

```js

npm i

```

とコマンドを打ち、dependenciesにあるパッケージのみをインストールする場合は、

```js

npm i -production

```

とコマンドを打てばいい。
