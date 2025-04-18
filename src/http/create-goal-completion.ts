export async function completeGoal(goalId: string) {
  const resp = await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goalId }),
  })

  if (!resp.ok) {
    throw new Error('Failed to complete goal')
  }
}
