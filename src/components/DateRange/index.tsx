import * as React from 'react';
import { formatDate } from '../../helpers/format-date';

interface DateRangeProps {
  from: Date;
  to?: Date;
}

const toISODate = (date: Date): string => date.toISOString().split('T')[0];

export const DateRange: React.FC<DateRangeProps> = ({ from, to }: DateRangeProps) => {
  return (
    <p className="font-mono text-xs leading-6 text-muted">
      <time className="whitespace-nowrap" dateTime={toISODate(from)}>
        {formatDate(from)}
      </time>{' '}
      –{' '}
      {to !== undefined ? (
        <time className="whitespace-nowrap" dateTime={toISODate(to)}>
          {formatDate(to)}
        </time>
      ) : (
        'Present'
      )}
    </p>
  );
};
