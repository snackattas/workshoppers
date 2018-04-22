function html(...args) {
  const phrase = args[0]
  const vars = args.slice(1)

  return phrase.reduce ((accum, cV, i) => {
    let subst = vars[i] ? vars[i] : ""
    let transformed = subst.replace(/&/, '&amp;')
                           .replace(/'/, '&apos;')
                           .replace(/"/, '&quot;')
                           .replace(/</, '&lt;')
                           .replace(/>/, '&gt;')
    return `${accum}${cV}${transformed}`
  }, "")
}
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
