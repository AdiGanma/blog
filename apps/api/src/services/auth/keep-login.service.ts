import prisma from '@/prisma';

export const keepLoginService = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new Error('invalid email address');
    }

    return {
      message: 'keep login success',
      data: user,
    };
  } catch (error) {
    throw error;
  }
};
