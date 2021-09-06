declare interface NodeModule {
  hot: {
    accept(function_: () => void): void;
  };
}
