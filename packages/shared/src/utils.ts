/**
 * Format date to ISO string
 */
export const formatDate = (date: Date = new Date()): string => {
  return date.toISOString();
};

/**
 * Simple validator to check if a string is empty
 */
export const isEmptyString = (str: string): boolean => {
  return !str || str.trim().length === 0;
};

/**
 * Format API response
 */
export const formatApiResponse = <T>(
  status: number, 
  data?: T, 
  error?: string
) => {
  return {
    status,
    data,
    error,
    timestamp: formatDate()
  };
};