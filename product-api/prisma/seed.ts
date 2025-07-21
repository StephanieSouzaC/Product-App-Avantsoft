import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Wireless Mouse',
        price: 29.99,
        sku: 'MSE001',
      },
      {
        name: 'Mechanical Keyboard',
        price: 129.5,
        sku: 'KBD002',
      },
      {
        name: '27-inch Monitor',
        price: 899.0,
        sku: 'MON003',
      },
      {
        name: 'Bluetooth Headphones',
        price: 199.99,
        sku: 'HPH004',
      },
      {
        name: 'USB-C Hub',
        price: 59.0,
        sku: 'HUB005',
      },
      {
        name: 'Webcam Full HD',
        price: 149.9,
        sku: 'CAM006',
      },
      {
        name: 'Notebook Pro 15"',
        price: 2499.99,
        sku: 'NBK007',
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed: Products inserted successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });