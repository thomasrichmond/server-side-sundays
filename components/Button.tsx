"use client";

type TButton = {
  label: string;
  variant: "primary" | "secondary" | "action";
  onClick?: () => void;
};

function Button({ label, variant, onClick }: TButton) {
  console.log(label, variant, onClick);
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold p-2 rounded"
      onClick={() => {
        console.log("clicked");
      }}>
      {label}
    </button>
  );
}

export default Button;
