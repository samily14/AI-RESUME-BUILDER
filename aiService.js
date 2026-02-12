function generateSummary(data) {
  if (data.experience > 0) {
    return `Experienced professional with strong skills in ${data.skills}.`;
  } else {
    return `Motivated fresher with strong knowledge in ${data.skills}.`;
  }
}

module.exports = { generateSummary };