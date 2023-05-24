import {createServerSideHelpers} from "@trpc/react-query/server";
import { appRouter } from "./root";
import { createInnerTRPCContext } from "./trpc";
import superjson from "superjson";

export function ssgHelper(){
    return createServerSideHelpers({
        router: appRouter,
        ctx: createInnerTRPCContext({session:null, revalidateSSG: null}),
        transformer : superjson,
    })
}