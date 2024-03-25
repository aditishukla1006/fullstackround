'use client';
import React from "react";
import Image from "next/image";
import { BarChart, Card } from "@tremor/react";  // Importing BarChart from Tremor


const chartdata = [
  {
    name: 'Atrium Health',
    'Organization': 5000,
  },
  {
    name: 'YMCA',
    'Organization': 800,
  },
  {
    name: '',
    'Organization': 1400,
  },

];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export const BarChartPhilanthropia = () => (
  <BarChart
    data={chartdata}
    index="name"
    categories={['Organization']}
    colors={['blue']}
    valueFormatter={dataFormatter}
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
  />
);