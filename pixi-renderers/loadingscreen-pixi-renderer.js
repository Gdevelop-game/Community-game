gdjs.LoadingScreenPixiRenderer = function (
  runtimeGamePixiRenderer,
  loadingScreenSetup
) {
  this._pixiRenderer = runtimeGamePixiRenderer.getPIXIRenderer();
  this._loadingScreen = new PIXI.Container();

  this._progressText = new PIXI.Text(" ", {
    fontSize: "30px",
    fontFamily: "Arial",
    fill: "#673ab7",
    align: "center",
    fontWeight: "bold",
  });

  if (loadingScreenSetup && loadingScreenSetup.showGDevelopSplash) {
    this._madeWithText = new PIXI.Text("MADE WITH", {
      fontSize: "20px",
      fontFamily: "Arial",
      fill: "#FFFFFF",
      align: "center",
      fontWeight: "lighter",
    });
    this._madeWithText.position.y = this._pixiRenderer.height / 2 - 130;
    this._websiteText = new PIXI.Text("gdevelop-app.com", {
      fontSize: "30px",
      fontFamily: "Arial",
      fill: "#673ab7",
      align: "center",
      fontWeight: "bold",
    });
    this._websiteText.position.y = this._pixiRenderer.height / 2 + 100;

    this._splashImage = new PIXI.Sprite.from(gdjs.splashImage);
    this._splashImage.position.x = this._pixiRenderer.width / 2;
    this._splashImage.position.y = this._pixiRenderer.height / 2;
    this._splashImage.anchor.x = 0.5;
    this._splashImage.anchor.y = 0.5;
    this._splashImage.scale.x = this._pixiRenderer.width / 800;
    this._splashImage.scale.y = this._pixiRenderer.width / 800;
    this._backgroundImage = new PIXI.Sprite.from(gdjs.backgroundImage);

    this._backgroundImage.scale.x = this._pixiRenderer.width / 800;
    this._backgroundImage.scale.y = this._pixiRenderer.width / 800;

    this._loadingScreen.addChild(this._backgroundImage);

    this._graphics = new PIXI.Graphics();

    // Rectangle
    this._graphics.beginFill(0xffffff, 0.75);
    this._graphics.drawRect(
      0,
      this._pixiRenderer.height - this._pixiRenderer.height / 8,
      this._pixiRenderer.width,
      this._pixiRenderer.height
    );
    this._graphics.endFill();
    this._loadingScreen.addChild(this._graphics);

    this._loadingScreen.addChild(this._splashImage);
    this._loadingScreen.addChild(this._madeWithText);
    this._loadingScreen.addChild(this._websiteText);
  }
  this._loadingScreen.addChild(this._progressText);
};

gdjs.LoadingScreenRenderer = gdjs.LoadingScreenPixiRenderer; //Register the class to let the engine use it.

gdjs.LoadingScreenPixiRenderer.prototype.render = function (percent) {
  var screenBorder = 20;

  if (this._madeWithText) {
    this._madeWithText.position.x =
      this._pixiRenderer.width / 2 - this._madeWithText.width / 2;
    this._madeWithText.position.y =
      this._pixiRenderer.height / 2 -
      this._splashImage.height / 2 -
      this._madeWithText.height -
      20;
  }
  if (this._websiteText) {
    this._websiteText.position.x =
      this._pixiRenderer.width - this._websiteText.width - screenBorder;
    this._websiteText.position.y =
      this._pixiRenderer.height - this._websiteText.height - screenBorder;
  }

  this._progressText.text = percent + "%";
  this._progressText.position.x = screenBorder;
  this._progressText.position.y =
    this._pixiRenderer.height - this._progressText.height - screenBorder;

  this._pixiRenderer.render(this._loadingScreen);
};

gdjs.LoadingScreenPixiRenderer.prototype.unload = function () {
  this._loadingScreen.destroy({
    children: true,
    texture: true,
    baseTexture: true,
  });
};
