import { z } from 'zod';

const variantSchema = z.object({
  name: z.string().optional(),
  value: z.union([
    z.string().min(1, 'Value is required'),
    z.number(),
  ]),
});

export const createFlagSchema = z.discriminatedUnion(
  'type',
  [
    // BOOLEAN → NO VARIANTS
    z.object({
      type: z.literal('boolean'),
      name: z.string().min(1),
      key: z.string().min(1),
      description: z.string().optional(),
      enabled: z.boolean(),
      variants: z.any().optional(),
    }),

    // STRING → VARIANTS REQUIRED
    z.object({
      type: z.literal('string'),
      name: z.string().min(1),
      key: z.string().min(1),
      description: z.string().optional(),
      enabled: z.boolean(),
      variants: z
        .array(variantSchema)
        .min(2)
        .refine(
          (variants) => {
            const values = variants.map((v) => v.value);

            return new Set(values).size === values.length;
          },
          {
            message:
              'Duplicate variant values are not allowed',
          },
        ),
    }),

    // NUMBER → VARIANTS REQUIRED
    z.object({
      type: z.literal('number'),
      name: z.string().min(1),
      key: z.string().min(1),
      description: z.string().optional(),
      enabled: z.boolean(),
      variants: z
        .array(variantSchema)
        .min(2)
        .refine(
          (variants) => {
            const values = variants.map((v) => v.value);

            return new Set(values).size === values.length;
          },
          {
            message:
              'Duplicate variant values are not allowed',
          },
        ),
    }),
  ],
);
