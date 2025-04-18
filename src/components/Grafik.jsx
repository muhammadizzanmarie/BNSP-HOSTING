import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'PPW', value: 30 },
  { name: 'PPL', value: 20 },
  { name: 'PSJ', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Grafik = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Grafik Pendaftar Berdasarkan Jurusan</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafik;
