export default function Chart() {
  return (
      <div className="flex flex-col w-full pt-4 gap-8 h-[calc(100vh-60px)] items-center justify-center">
        <h1 className="text-6xl">OUR CHART</h1>
        <iframe src="https://dexscreener.com/solana/crsqyrc9lw3khje1i6sxzimwbtpbkvfhuk8pvxbyjv16?embed=1&theme=dark"
                className="max-w-7xl w-full h-[700px]"></iframe>
      </div>
  );
}