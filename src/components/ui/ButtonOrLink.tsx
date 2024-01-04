import { ComponentProps } from "react";
import Link from "next/link";
import { VariantProps } from "class-variance-authority";

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface Props extends ButtonOrLinkProps  {}

/**
 * Esse componente vai renderizar ou um Butão ou um Link, dependendo do "Props" que for passado pra ele.
 */

export function ButtonOrLink({ href, ...props}: Props) {
    const isLink = typeof href !== 'undefined';
    const ButtonOrLink = isLink ? 'a' : 'button';

    let content = <ButtonOrLink {...props} />;

    if(isLink) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}
