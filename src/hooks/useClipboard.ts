import { inject } from "vue";

const useClipboard = () => {
  const clipboard = inject<ClipboardMethod>("copy")!;
  return clipboard;
};

export default useClipboard;
