import { css, RuleSet } from "styled-components";

export type ShapeSizeType =
  | "ExtraSmall"
  | "Small"
  | "Medium"
  | "Large"
  | "ExtraLarge";

export type ShapeStyles = {
  ExtraSmall: RuleSet;
  Small: RuleSet;
  Medium: RuleSet;
  Large: RuleSet;
  ExtraLarge: RuleSet;
};

export const HiDeerShape: ShapeStyles = Object.freeze({
  ExtraSmall: css`
    border-radius: 10px;
  `,
  Small: css`
    border-radius: 12px;
  `,
  Medium: css`
    border-radius: 14px;
  `,
  Large: css`
    border-radius: 16px;
  `,
  ExtraLarge: css`
    border-radius: 30px;
  `,
});
