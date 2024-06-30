export function formatDate(date: Date): string {
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return months[month]?.substring(0, 3) + ' ' + year;
}
