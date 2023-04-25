namespace pxsim  {
    export class RecordingState {
        currentlyRecording = false;
    }
}
namespace pxsim.record {

    export async function record(): Promise<void> {
        //request permission is asynchronous
        let b = board();
        if (!b.recordingState.currentlyRecording) {
            b.recordingState.currentlyRecording = true;
            runtime.queueDisplayUpdate();
        }
    }

    export function play(): void {

    }

    export function stop(): void {

    }

    export function erase(): void {

    }

    export function setMicrophoneGain(gain: number): void {

    }

    export function audioDuration(sampleRate: number): number {
        return 0;
    }

    export function audioIsPlaying(): boolean {
        return false;
    }


    export function audioIsRecording(): boolean {
        return false;
    }

    export function audioIsStopped(): boolean {
        return false;
    }

    export function setSampleRate(rate: number): void {
    }

    export function getSampleRate(): number {
        return 0;
    }
}