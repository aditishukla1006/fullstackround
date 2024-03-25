'use client'
import { DonutChart, Card } from '@tremor/react'
 
const data = [
    {
      Theme: 'Health - Youth',
      Donations: 500,
    },
    {
      Theme: 'Health - Elderly',
      Donations: 25,
    },
    {
      Theme: 'Politics - Youth oriented',
      Donations: 321,
    },
    {
      Theme: 'Sustainable Fashion',
      Donations: 234,
    },
    {
      Theme: 'Sustainable Clean Energy',
      Donations: 76,
    },
  ]
const valueFormatter = (number: number) => {
  // Use reduce method to calculate total number of classmates
  const totalClassmates = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.Donations,
    0,
  )
  // Calculate the percentage and round it to a whole number
  const percentage = Math.round((number / totalClassmates) * 100)
  // Return a string
  return `${percentage}%`
}
 
export default function PieChartPhilanthropia() {
    return (
      <div className="my-10">
        <Card>
          <DonutChart
            data={data}
            index="Theme"
            category="Donations"
            variant="pie"
          />
        </Card>
      </div>
    )
  }