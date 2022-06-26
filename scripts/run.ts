export default function run<A>(eff: () => Promise<A>): void {
  eff()
    .then(() => {
      process.exitCode = 0
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e)
      process.exitCode = 1
    })
}
