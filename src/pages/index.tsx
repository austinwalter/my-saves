import Header from '../components/header'
import Card from '../components/card'

export default function Home() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-6 p-10 columns-1 md:columns-2 lg:columns-3 gap-2 [column-fill:_balance] box-border before:box-inherit after:box-inherit">
        <Card srcId="-YUXq_M2pSU" />
        <Card srcId="AtajA73UD40" short />
        <Card srcId="AtajA73UD40" short />
        <Card srcId="-YUXq_M2pSU" />
        <Card srcId="AtajA73UD40" short />
        <Card srcId="-YUXq_M2pSU" />
        <Card srcId="AtajA73UD40" short />
        <Card srcId="-YUXq_M2pSU" />
        <Card srcId="-YUXq_M2pSU" />
      </div>
    </main>
  )
}