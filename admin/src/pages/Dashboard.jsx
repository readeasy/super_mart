import { BarChart, Users, DollarSign, ShoppingBag } from 'lucide-react';
import { BarChart as ReChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
];

const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{title}</p>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{value}</h3>
            </div>
            <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--color-primary)' }}>
                <Icon size={24} />
            </div>
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
            <span style={{ color: 'var(--color-success)' }}>{trend}</span> since last week
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Dashboard</h1>
                <button className="btn btn-primary">Download Report</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <StatCard title="Total Revenue" value="$45,231.89" icon={DollarSign} trend="+20.1%" />
                <StatCard title="Active Orders" value="573" icon={ShoppingBag} trend="+12.5%" />
                <StatCard title="Total Customers" value="2,345" icon={Users} trend="+3.4%" />
                <StatCard title="Avg. Order Value" value="$78.34" icon={BarChart} trend="+5.2%" />
            </div>

            <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px' }}>
                <h3>Weekly Revenue</h3>
                <div style={{ width: '100%', height: 300, marginTop: '2rem' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ReChart data={data}>
                            <XAxis dataKey="name" stroke="var(--color-text-muted)" />
                            <YAxis stroke="var(--color-text-muted)" />
                            <Tooltip
                                contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                            />
                            <Bar dataKey="sales" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                        </ReChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3>Recent Orders</h3>
                <div className="table-container" style={{ marginTop: '1rem' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[101, 102, 103, 104, 105].map(id => (
                                <tr key={id}>
                                    <td>#{id}</td>
                                    <td>John Doe</td>
                                    <td>$124.00</td>
                                    <td><span className="badge badge-success">Delivered</span></td>
                                    <td>Jan 21, 2026</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;