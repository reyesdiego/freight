declare function yn (value?: string | number | boolean, options?: yn.Options): boolean | null;

declare namespace yn {
  export interface Options {
    /**
     * Use a key distance-based score to leniently accept typos of `yes` and `no`.
     */
    lenient?: boolean;
    /**
     * Default value if no match was found.
     */
    default?: boolean | null;
  }
}

export = yn;
