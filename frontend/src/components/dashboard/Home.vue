<template>
    <div class="w-full ml-24 mr-5 mb-9 my-7 rounded-lg bg-neutral-900 px-7 py-6 h-fit">
        <h1 class="text-4xl font-bold text-neutral-50">Dashboard</h1>
        <div class="grid grid-cols-2 w-full">
          <div class="grid grid-cols-2 grid-rows-4 w-full mt-7 gap-6">
            <div class="bg-neutral-800 px-5 pt-3 pb-5 rounded-lg w-60 mr-3">
              <h1 class="text-xl font-normal">Total Links</h1>
              <h1 class="text-6xl font-bold text-green-400">27</h1>
            </div>
            <div class="bg-neutral-800 px-5 pt-3 pb-5 rounded-lg w-60 mr-3">
              <h1 class="text-xl font-normal">Visitor</h1>
              <h1 class="text-6xl font-bold text-green-400">1,029</h1>
            </div>
            <div class="bg-neutral-800 px-5 pt-3 pb-5 rounded-lg w-60 mr-3">
              <h1 class="text-xl font-normal">Unique Visitor</h1>
              <h1 class="text-6xl font-bold text-green-400">762</h1>
            </div>
          </div>
          <div class="mt-7 ">
            <Line :chart-data="chartData" class="bg-neutral-800 w-full rounded-lg p-3 h-full"/>
          </div>
        </div>
    </div>
</template>
<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

export default {
    data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#2dd4bf',
            data: [0, 20, 12]
          },
          {
            label: 'Data Two',
            backgroundColor: '#fbbf24',
            data: [0, 20, 30]
          },
          {
            label: 'Data Three',
            backgroundColor: '#3b82f6',
            data: [0, 10, 40]
          }
        ]
      }
    }
  },
    components: {
        Line
    },
}
</script>