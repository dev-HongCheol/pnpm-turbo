import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist", // 변경된 부분
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      extract: true,
    }),
    svgr(), // SVGR 플러그인 추가
  ],
};
