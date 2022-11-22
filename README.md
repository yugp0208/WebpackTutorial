## WebPack 追加したプラグイン

### ローダー系

**ローダーとは、<font color='yellow'>主にJavaScript以外のファイルをバンドルできるように変換する</font>プログラム。<br>
CSSや画像などは、そのままの形式だとwebpackでバンドルできないため、webpackでバンドルをする前にローダーでファイルを変換します。
その為、JavaScript以外のファイルを扱う際は、基本的にローダーが必要**

* sass-loader
  * SassをCSSにコンパイルする
* css-loader
  * CSSをモジュールに変換する
* style-loader
  * 変換したCSSのスタイルが記述されたstyleタグをHTMLに追加する
* postcss-loader
  * postcssを利用するloader(cssにベンプレを自動付与できたり、圧縮したりできる)

_ _ _ 

### その他

* autoprefixer
  * ベンダープレフィックスを自動で付与する
* mini-css-extract-plugin
  * cssファイルを個別に出力する
* watchモード
  * 自動更新の設定
* clean
  * webpack.config.jsのoutputにclean : trueを設定することで、ごみファイルを自動削除してくれる。





