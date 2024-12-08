import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Founder from '../../../public/Founder.png'

const questions = [
    {
        question: "How can I increase user retention?",
        role: "Founder",
        bgColor: "bg-[#FDE1D3]",
    },
    {
        question: "What causes you to use competing products instead of ours?",
        role: "Product Manager",
        bgColor: "bg-[#FEF7CD]",
    },
    {
        question: "What UI elements confuse our users the most?",
        role: "Product Designer",
        bgColor: "bg-[#FDE1D3]",
    },
    {
        question: "What content engages our users most?",
        role: "Marketing Manager",
        bgColor: "bg-[#FDE1D3]",
    },
    {
        question: "What technical issues have you encountered while using our product?",
        role: "CTO",
        bgColor: "bg-[#F2FCE2]",
    },
    {
        question: "What part of our website/app is most confusing or off-putting?",
        role: "UX Researcher",
        bgColor: "bg-[#D3E4FD]",
    },
    {
        question: "Why is the churn rate so high?",
        role: "CXO",
        bgColor: "bg-[#D3E4FD]",
    },
    {
        question: "& So On...",
        role: "",
        bgColor: "bg-white",
    },
];

const QuestionCards = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-3 py-12">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-12">
                    Elzo can help you find answers to important questions.
                </h1>

                <div className="flex flex-wrap justify-center md:justify-between gap-4">
                    <div className="space-y-4">
                        <Card
                            className='flex w-[17rem] h-48 p-6 gap-10 flex-col justify-between items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#FBF2E5] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-foreground mb-4">How can I increase user retention?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                        <Card
                            className='flex w-[17rem] h-64 p-6 gap-10 flex-col justify-between items-start rounded-2xl border-[1px] border-[var(--Color-Secondary-Grey-800,#343A40)] bg-[_#E1EDFF] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-black mb-4">What part of our website/app is most confusing or off-putting?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-4">
                        <Card
                            className='flex w-[17rem] h-64 p-6 gap-10 justify-between flex-col items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#F5F6D6] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-black mb-4">What part of our website/app is most confusing or off-putting?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                        <Card
                            className='flex w-[17rem] h-48 p-6 flex-col justify-between items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#FBF2E5] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-foreground mb-4">How can I increase user retention?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-4">
                        <Card
                            className='flex w-[17rem] h-48 p-6 gap-10 flex-col justify-between items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#FBF2E5] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-foreground mb-4">How can I increase user retention?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                        <Card
                            className='flex w-[17rem] h-64 p-6 gap-10 flex-col justify-between items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#DFF5D5] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-black mb-4">What part of our website/app is most confusing or off-putting?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-4">
                        <Card
                            className='flex w-[17rem] h-64 p-8 gap-10 flex-col justify-between items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#DAF3F8] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-black mb-4">What part of our website/app is most confusing or off-putting?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                        <Card
                            className='flex w-[17rem] h-48 p-6 gap-10 flex-col justify-between items-start rounded-2xl border-[1px] border-[solid] border-[#343A40] bg-[#FBF2E5] [box-shadow:4px_4px_0px_0px_var(--Color-Secondary-Grey-900,_#212529)]'
                        >
                            <p className="text-lg font-medium text-foreground mb-4">How can I increase user retention?</p>

                            <div className="w-fit bg-white flex items-center rounded-lg border border-foreground p-2 gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                                    <AvatarFallback>Founder</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700">Founder</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCards;
