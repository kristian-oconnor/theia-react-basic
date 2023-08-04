import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';
import Asker from './react-app/colour-questionaire';

@injectable()
export class WidgetWidget extends ReactWidget {

    static readonly ID = 'widget:widget';
    static readonly LABEL = 'Koco-Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected init(): void {
        this.doInit()
    }

    protected async doInit(): Promise <void> {
        this.id = WidgetWidget.ID;
        this.title.label = WidgetWidget.LABEL;
        this.title.caption = WidgetWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
        return <Asker displayMessage={(message: string) => this.messageService.info(message)}/>
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('ask-colour-question');
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> ACTIVATE: ???", msg, htmlElement)
        if (htmlElement) {
            htmlElement.focus();
        }
    }

    protected onUpdateRequest(msg: Message): void {
        super.onUpdateRequest(msg);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE REQUEST: ???", msg)
    }

    protected onBeforeShow(msg: Message): void {
        super.onBeforeShow(msg);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> b4 SHOW: ???", msg)
    }

    protected onCloseRequest(msg: Message): void {
        super.onCloseRequest(msg);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> CLOSE REQ: ???", msg)
    }

}
