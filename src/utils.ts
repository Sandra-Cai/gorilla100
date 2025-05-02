export function log(msg: string) {
    // Use Lens Studio's print if available, otherwise fallback to console.log
    if (typeof (globalThis as any).print === "function") {
      (globalThis as any).print(msg);
    } else {
      console.log(msg);
    }
  }