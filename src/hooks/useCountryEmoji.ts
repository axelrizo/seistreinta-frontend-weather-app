export const useCountryEmoji = ({ countryCode }: { countryCode: string }) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))

  return { emoji: String.fromCodePoint(...codePoints) }
}
