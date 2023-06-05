type a = number;
type b = number;
type c = object;
type d = a extends null
  ? true
  : b extends string
  ? string
  : c extends string
  ? "pagla"
  : "pagli";

type Sheikh = {
  wife1: string;
  wife2: string;
};

// check property using keyof functionality
type checkProperty<T, K> = K extends keyof Sheikh ? "president" : "Chairman";

type checkWife = checkProperty<Sheikh, "wif1">;
