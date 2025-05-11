import "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    image: {
      setImage: (options: { src: string }) => ReturnType;
    };
  }
}
