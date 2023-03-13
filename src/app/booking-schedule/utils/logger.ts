type LogType = 'log' | 'warn' | 'error';
export function logger<T>(category: string, type: LogType = 'log') {
  return (data: T) => {
    console[type](category, data);
  };
}
