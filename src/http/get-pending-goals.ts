type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const resp = await fetch('http://localhost:3333/pending')
  const data = await resp.json()

  console.log(data)

  return data.pendingGoals
}
