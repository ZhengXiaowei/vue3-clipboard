import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $copyText(text: string, container?: HTMLElement): Promise<Clipboard.Event>;
  }
}
