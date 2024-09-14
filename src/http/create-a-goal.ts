interface CreateAGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createAGoal({
  title,
  desiredWeeklyFrequency,
}: CreateAGoalRequest) {
  const resp = await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })

  if (!resp.ok) {
    throw new Error('Failed to create goal')
  }
}
