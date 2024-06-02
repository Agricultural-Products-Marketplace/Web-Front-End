import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from 'chart.js/auto';

function AdminChart(): JSX.Element {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const config: ChartConfiguration<'bar'> = {
            type: "bar",
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Revenue",
                  data: [65, 59, 80, 81, 56, 55, 40],
                  backgroundColor: "rgba(0, 255, 102, 1)",
                  borderWidth: 1,
                  barThickness: 20,
                  borderRadius: 15,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
                x: {
                  grid: {
                    display: false, // Hide grid lines on the x-axis
                  },
                },
              },
            },
          };
          

        chartInstance.current = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current?.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}

export default AdminChart;
