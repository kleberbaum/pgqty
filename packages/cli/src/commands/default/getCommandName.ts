import { getUserPackageManager } from './getUserPackageManager';

export const getCommandName = () => {
  switch (getUserPackageManager()) {
    case 'npm': {
      return 'npx @pgqty/cli';
    }
    case 'pnpm': {
      return 'pnpm dlx @pgqty/cli';
    }
    case 'yarn': {
      return 'yarn dlx @pgqty/cli';
    }
    default: {
      return 'pgqty';
    }
  }
};
