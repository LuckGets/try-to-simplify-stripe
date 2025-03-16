import axios from "axios";
import { useCallback, useEffect, useState } from "react";

/**
 *
 * @param {Function} asyncFunction
 * @returns {boolean} isLoading
 * @returns {boolean} isError
 * @returns {Error} error
 * @returns {any} data
 */
export function useFetch(asyncFunction) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    const fetchFn = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        const resp = await asyncFunction();
        if (isActive) setData(resp);
      } catch (err) {
        console.error(err);
        if (isActive) {
          setIsError(true);
          setError(err);
        }
      } finally {
        if (isActive) setIsLoading(false);
      }

      // We return the clenup function
      // to set isActive equal false
      // so that the state won't
      // update with the stale data
      return () => {
        isActive = false;
      };
    };

    fetchFn();

    return () => {
      isActive = false;
    };
  }, [asyncFunction]);

  return { data, isLoading, isError, error };
}
